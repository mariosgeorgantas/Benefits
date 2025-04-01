var languageContent = {
  greek: {
    languageBtn: "EL",
    mainTitle: "Οδηγός Κοινωνικών Επιδομάτων",
    pageTitle: "Οδηγός Κοινωνικών Επιδομάτων",
    infoTitle: "Πληροφορίες για τη χορήγηση Επιδομάτων για το έτος 2025",
    disclaimer:
      "Τα αποτελέσματα από αυτήν την υπηρεσία είναι ενδεικτικά μόνο και δεν αποτελούν εγγύηση για πληρωμές. Βάσει των πληροφοριών που παρέχετε, η υπηρεσία θα προτείνει πληρωμές που μπορείτε να εξερευνήσετε περαιτέρω. Εάν οποιαδήποτε από τις πληροφορίες που παρέχετε είναι εσφαλμένη, οι εμφανιζόμενες πληρωμές μπορεί επίσης να είναι λανθασμένες. Αλλαγές στην πολιτική, τη νομοθεσία, τις συνθήκες σας και μελλοντικά γεγονότα μπορεί να σημαίνουν ότι η πληρωμή που θα λάβετε τελικά διαφέρει από τα παρεχόμενα αποτελέσματα.",
    subTitle1:
      "Αυτό το ερωτηματολόγιο μπορεί να σας βοηθήσει να βρείτε αν δικαιούστε να λάβετε κάποιο  κοινωνικό επίδομα στο έτος 2025.",
    subTitle2:
      "H συμπλήρωση του ερωτηματολογίου δεν απαιτεί παραπάνω από 10 λεπτά.",
    subTitle3: "Δεν θα αποθηκεύσουμε ούτε θα μοιραστούμε τις απαντήσεις σας.",
    backButton: "Πίσω",
    nextQuestion: "Επόμενη ερώτηση",
    footerText:
      "Υλοποίηση για την εκπόνηση διπλωματικής εργασίας από τον μεταπτυχιακό φοιτητή των Πληροφοριακών Συστημάτων Μάριο Γεωργαντά"
    startBtn: "Έναρξη",
    chooseAnswer: "Επιλέξτε την απάντησή σας",
    oneAnswer: "Μπορείτε να διαλέξετε μόνο μία επιλογή.",
    errorAn: "Λάθος:",
    choose: "Πρέπει να επιλέξετε μια απάντηση",
  },
};

// Retrieve the selected language from localStorage or set default to "greek"
var currentLanguage = localStorage.getItem("preferredLanguage") || "greek";

function toggleLanguage() {
  currentLanguage = currentLanguage === "greek" ? "english" : "greek";
  localStorage.setItem("preferredLanguage", currentLanguage);
  updateContent();
}

function updateContent() {
  var components = document.querySelectorAll(".language-component");

  components.forEach(function (component) {
    var componentName = component.dataset.component;
    component.textContent = languageContent[currentLanguage][componentName];
  });
}

// Initialize the content based on the selected language
updateContent();
