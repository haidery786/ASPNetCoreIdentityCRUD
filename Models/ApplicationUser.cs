using Microsoft.AspNetCore.Identity;

namespace my_new_app.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

    }
}
