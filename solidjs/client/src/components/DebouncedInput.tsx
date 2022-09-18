import { createEffect, createSignal, JSX } from 'solid-js';
import { debounce } from '@solid-primitives/scheduled';

export function DebouncedInput({
    value: initialValue,
    onChange,
    wait = 500,
    ...props
}: {
    value?: string;
    onChange: (value: string) => void;
    wait?: number;
} & Omit<
    JSX.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value' | 'onInput'
>) {
    const [value, setValue] = createSignal(initialValue || '');
    const debouncedInput = debounce((value: string) => onChange(value), wait);

    createEffect(() => {
        debouncedInput(value());
    });

    return (
        <input
            {...props}
            value={value()}
            onInput={(e) => setValue(() => e.currentTarget.value)}
        />
    );
}
