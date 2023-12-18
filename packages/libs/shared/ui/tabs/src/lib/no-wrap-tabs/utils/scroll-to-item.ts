export function scrollToItem(container: Element | undefined, index: number) {
  if (index === 0) {
    return;
  }
  if (container && container.children) {
    const item = Array.from(container.children)[index];
    if (item) {
      const htmlElement = item as HTMLElement;
      if (
        htmlElement.offsetLeft + htmlElement.clientWidth >
        container.clientWidth + container.scrollLeft
      ) {
        container.scrollTo({
          left: htmlElement.offsetLeft,
          behavior: 'smooth',
        });
      }
      if (htmlElement.offsetLeft < container.scrollLeft) {
        container.scrollTo({
          left: htmlElement.offsetLeft,
          behavior: 'smooth',
        });
      }
    }
  }
}
