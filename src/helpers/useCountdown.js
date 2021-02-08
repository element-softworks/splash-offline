import { useEffect, useState } from 'react';
import { intervalToDuration, isAfter } from 'date-fns';

const useCountdown = (
    date,
    options = { units: { hours: true, minutes: true, seconds: true }, delimiter: ':' }
) => {
    date = new Date(date);
    const { units, delimiter } = options;
    const [data, setData] = useState([null, null, isAfter(new Date(), date)]);
    const [intervalReference, setIntervalReference] = useState(null);

    const handleInterval = () => {
        if (!date) {
            setData([null, null, false]);
            return;
        }

        const isAfterDate = isAfter(new Date(), date);

        const duration = intervalToDuration({
            start: new Date(),
            end: date,
        });

        const durationArr = Object.keys(duration)
            .map(key => units[key] && duration[key])
            .filter(x => typeof x !== 'undefined');

        let durationObj = {};

        Object.keys(units).forEach(
            key =>
                (durationObj[key] = {
                    value: isAfterDate ? 0 : duration[key],
                    formatted: isAfterDate
                        ? '00'
                        : duration[key] < 10
                        ? `0${duration[key]}`
                        : `${duration[key]}`,
                })
        );

        setData([
            durationArr
                .map(item => (isAfterDate ? `00` : item < 10 ? `0${item}` : `${item}`))
                .join(!delimiter ? '' : delimiter ?? ''),
            durationObj,
            isAfterDate,
        ]);
        if (isAfterDate) {
            clearInterval(intervalReference);
        }
    };

    useEffect(() => {
        handleInterval();
        setIntervalReference(setInterval(handleInterval, 1000));
        return () => clearInterval(intervalReference);
    }, []);

    return data;
};

export default useCountdown;
