export default (date: string): string => {
    const time = new Date(date);
    const options = {hour: "numeric", minute: "numeric", hour12: false};

    return new Intl.DateTimeFormat("en-US", options).format(time);;
}