export function copyToClipboard(data: string): void {
    const listener = (e: ClipboardEvent) => {
        // @ts-ignore
        e.clipboardData.setData('text/plain', data);
        e.preventDefault();
        document.removeEventListener('copy', listener);
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
}
