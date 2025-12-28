$(document).ready(function () {

  /* ===============================
     LOAD PAGE FUNCTION
  =============================== */
  function loadPage(page) {
    if (!page) return;
     $("#main-content-9999").load(page, function (response, status, xhr) {


      if (status === "success") {

        // Clear all active states
        $(".asidebar-link-load-000, .asidebar-link-load-111, .asidebar-link-load-222")
          .removeClass("active");

        // Set active link based on page
        switch (page) {
          case "/pages/maingeneral/menu/home":
            $("#asidebari_home").addClass("active");
            break;

          case "/pages/maingeneral/menu/profile_information":
            $("#asidebari_profile_information").addClass("active");
            break;

          case "/pages/maingeneral/menu_settings/user_account_management/users":
            $("#settingSidebariUsrm_users").addClass("active");
            break;

          case "/pages/maingeneral/menu/token":
            // optional: add active state if needed
            break;

          default:
            console.log("Page loaded:", page);
        }

      } else {
        console.error("❌ Load error:", xhr.status, xhr.statusText);
        $("#main-content-9999").html(
          "<p class='text-danger'>Failed to load content.</p>"
        );
      }
    });
  }



          loadPage("/pages/maingeneral/menu/home");






  /* ===============================
     SIDEBAR CLICK HANDLER
  =============================== */
  $(document).on("click", ".asidebar-link-load-000", function (e) {
    e.preventDefault();

    const page = $(this).attr("href");
    if (!page) return;

    loadPage(page);
  });





});
