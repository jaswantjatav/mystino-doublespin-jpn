if (!isPageOntarioSpecific) {
    var isPageOntarioSpecific = false;
}

// If person is from Ontario and page is NOT Ontario specific
if (isOntario && !isPageOntarioSpecific) {

    // Launch the modal
    $("#ont-modal").modal();
}