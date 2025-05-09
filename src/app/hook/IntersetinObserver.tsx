import { useEffect, useState, RefObject } from "react";

const useCustomIntersection = (targetRef: RefObject<HTMLDivElement | null>) => {
    const [isDOMVisible, setDOMVisible] = useState<boolean>(false);
    const [scrollPercent, setScrollPercent] = useState<number>(0);
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setDOMVisible(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.1,
            }
        );

        const current = targetRef.current;

        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, [targetRef]);

    useEffect(() => {
        let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

            const percent = (scrollTop / scrollHeight) * 100;
            setScrollPercent(Math.min(Math.max(percent, 0), 100));

            setScrollDirection(scrollTop > lastScrollTop ? "down" : "up");
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return { isDOMVisible, scrollPercent, scrollDirection };
};

export default useCustomIntersection;
