import { useState, useCallback, useEffect } from 'react';
import { HeaderView } from './header-view';
import { getMonthIndex } from './utils';

export function HeaderContainer({
    from,
    monthes,
    getNewMonth
}) {
    const [value, setValue] = useState(0);
    const handleChange = useCallback((event, newValue) => {
        getNewMonth(newValue);
        setValue(newValue);
    }, [setValue, getNewMonth]);

    useEffect(() => {
        if (from) {
            document.fonts.ready.then(function() {
                setValue(getMonthIndex(from, monthes));
            });
        }
    }, []);

    return (
        <HeaderView
            monthes={monthes}
            value={value}
            handleChange={handleChange}
        />
    );
}
