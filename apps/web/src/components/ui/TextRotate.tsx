'use client';
 
import * as React from 'react';
import {
  AnimatePresence,
  motion,
  type HTMLMotionProps,
  type Transition,
} from 'motion/react';
 
import { cn } from '@/utils/cn';
import { GradientText } from './TextGradient';
 
type RotatingTextProps = {
  text: string | string[];
  rawText?: string;
  duration?: number;
  transition?: Transition;
  y?: number;
  containerClassName?: string;
  isGradient?: boolean;
  gradient?: string;
} & HTMLMotionProps<'div'>;
 
function RotatingText({
  text,
  rawText,
  y = -50,
  duration = 2000,
  transition = { duration: 0.3, ease: 'easeOut' },
  containerClassName,
  isGradient = false,
  gradient = 'linear-gradient(90deg, #3b82f6 0%, #a855f7 20%, #ec4899 50%, #a855f7 80%, #3b82f6 100%)',
  ...props
}: RotatingTextProps) {
  const [index, setIndex] = React.useState(0);
 
  React.useEffect(() => {
    if (!Array.isArray(text)) return;
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, duration);
    return () => clearInterval(interval);
  }, [text, duration]);
 
  const currentText = Array.isArray(text) ? text[index] : text;
 
  return (
    <div className={cn('overflow-hidden py-0', containerClassName)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentText}
          transition={transition}
          initial={{ opacity: 0, y: -y }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y }}
          {...props}
        >
          { isGradient ? (
              <GradientText
                className="text-2xl font-bold"
                text={currentText!}
                gradient={gradient}
                />
            )
            :
            currentText
          }
        </motion.div>
      </AnimatePresence>
      {rawText}
    </div>
  );
}
 
export { RotatingText, type RotatingTextProps };