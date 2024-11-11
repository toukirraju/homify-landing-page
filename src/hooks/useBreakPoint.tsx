import React from 'react'

const useBreakPoint = () => {
    // TODO: Implement useBreakPoint hook for get current screen size and return the value of the screen size
    // breakpoint: 640px, 768px, 1024px, 1280px, 1536px ("mobile", "tablet", "laptop", "desktop", "4k")
    // return value should be one of the following strings: "mobile", "tablet", "laptop", "desktop", "4k"
    // if viewport width is changed, the return value should be updated accordingly
    // Example:
    // const breakpoint = useBreakPoint()
    // console.log(breakpoint) // "mobile" | "tablet" | "laptop" | "desktop" | "4k"


    const [breakpoint, setBreakpoint] = React.useState<
        "mobile" | "tablet" | "laptop" | "desktop" | "4k"
    >("desktop");

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setBreakpoint("mobile");
            } else if (window.innerWidth < 768) {
                setBreakpoint("tablet");
            } else if (window.innerWidth < 1024) {
                setBreakpoint("laptop");
            } else if (window.innerWidth < 1280) {
                setBreakpoint("desktop");
            } else {
                setBreakpoint("4k");
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return breakpoint

}

export default useBreakPoint
