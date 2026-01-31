import { useEffect, useRef, useState, RefObject } from 'react';

interface UseRevealOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export function useReveal<T extends HTMLElement>(
    options: UseRevealOptions = {}
): [RefObject<T>, boolean] {
    const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce]);

    return [ref, isVisible];
}

// Hook for staggered children animations
export function useStaggeredReveal(
    itemCount: number,
    baseDelay: number = 100
): { getDelay: (index: number) => string } {
    return {
        getDelay: (index: number) => `${index * baseDelay}ms`
    };
}

// Utility to combine class names with reveal state
export function revealClass(
    isVisible: boolean,
    baseClass: string = 'reveal',
    additionalClasses: string = ''
): string {
    return `${baseClass} ${isVisible ? 'visible' : ''} ${additionalClasses}`.trim();
}
