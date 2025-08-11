export default function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {

    let timer: ReturnType<typeof setTimeout> | null = null;

    return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            func.call(this, args)
        }, delay);
    }
}