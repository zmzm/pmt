export function getRightElementToScroll(container: HTMLElement) {
  if (container) {
    const offsetLeft = container.scrollLeft;
    const element = Array.from(container.children).find(
      (child) =>
        (child as HTMLElement).offsetLeft - offsetLeft + child.clientWidth >
        container.clientWidth
    );

    return {
      element,
      canScrollFurther: Boolean(
        element &&
          (element as HTMLElement).offsetLeft + container.clientWidth <
            container.scrollWidth
      ),
    };
  }
  return {
    canScrollFurther: false,
    element: null,
  };
}
