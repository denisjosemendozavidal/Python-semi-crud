function deleteNote(noteId) {
    console.log("clicked");
    
    fetch("/delete-note", {
      method: "POST",
      body: JSON.stringify({ noteId: noteId }),
    }).then((_res) => {
      window.location.href = "/";
    });
  }


  const base = document.getElementById("everything").value

  document.getElementById("here").innerHTML = base