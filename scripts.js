// Select the button and the paragraph it controls.
const contributionButton = document.querySelector('#squadcheck-toggle');
const contributionDetails = document.querySelector('#squadcheck-contributions');

contributionButton.addEventListener('click', () => {
    // Flip the paragraph's visibility on each click.
    contributionDetails.hidden = !contributionDetails.hidden;

    // Keep the accessible state and button label in sync with the paragraph.
    const isExpanded = !contributionDetails.hidden;
    contributionButton.setAttribute('aria-expanded', String(isExpanded));
    contributionButton.textContent = isExpanded
        ? 'Hide my contributions'
        : 'My contributions';
});

const pawsButton = document.querySelector('#paws-toggle');
const pawsDetails = document.querySelector('#paws-contributions');

pawsButton.addEventListener('click', () => {
    pawsDetails.hidden = !pawsDetails.hidden;

    const isExpanded = !pawsDetails.hidden;
    pawsButton.setAttribute('aria-expanded', String(isExpanded));
    pawsButton.textContent = isExpanded
        ? 'Hide my contributions'
        : 'My contributions';
});
