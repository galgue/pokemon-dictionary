import { useEffect, useState } from 'react';

export function DebouncedInput<T extends string | number>({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
}: {
    value?: T;
    onChange: (value: T) => void;
    debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>) {
    const [value, setValue] = useState<any>(initialValue);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);

        return () => clearTimeout(timeout);
    }, [value]);

    return (
        <input
            {...props}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}
