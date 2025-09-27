
    // Dark Mode Toggle
    function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
    }

    // Search Notices
    function searchNotices() {
      let input = document.getElementById("search").value.toLowerCase();
      let cards = document.getElementsByClassName("card");

      for (let i = 0; i < cards.length; i++) {
        let text = cards[i].innerText.toLowerCase();
        cards[i].style.display = text.includes(input) ? "block" : "none";
      }
    }
  