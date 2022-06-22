function shareToggle(state)
{
    // Check if are not in active state
    if(state.id === "share-image")
    {
        document.getElementById("share-image").style.display = "none";
        document.getElementById("share-button-container").style.backgroundColor = "hsl(214, 17%, 51%)";
        document.getElementById("share-image-2").style.display = "block";
        document.getElementById("author-section").style.backgroundColor = "hsl(217, 19%, 35%)";
        document.getElementById("author-section-2").style.display = "none";
        document.getElementById("share-section").style.display = "flex";
    }
    else
    {
        document.getElementById("share-image-2").style.display = "none";
        document.getElementById("share-button-container").style.backgroundColor = "hsl(210, 46%, 95%)";
        document.getElementById("share-image").style.display = "block";
        document.getElementById("author-section").style.backgroundColor = "transparent";
        document.getElementById("author-section-2").style.display = "flex";
        document.getElementById("share-section").style.display = "none";
    }
}