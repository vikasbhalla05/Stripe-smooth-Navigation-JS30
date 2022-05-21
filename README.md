# Building the Intuition

1. Get the 3 trigger li elements, background div & nav bar.
2. Attach events for mouseenter & mouseleave over all the trigger elements & create separate functions.
3. handling mouse enter
	- add class to class list for making the display block.
	- then add class to make the opacity 1 after a set timeout
	- this is how this animation is transitions in react and angular
4. handling mouse leave
	- remove the classes added in mouse enter
5. In mouse enter show the white background, get the dropdown from the respenctive li element.
6. Take the coordinates of the dropdown and nav using `getBoundingClientRect`.
7. change the properties of background div using the prev coordinates
8. height, width, top( wrt nav), left (wrt nav )
9. set style with `style` and `transform translate`.
10. check for the `display: block` before adding `opacity: 1`.