
using my_new_app.ViewModels.Validations;
using FluentValidation.Attributes;

namespace my_new_app.ViewModels
{
    [Validator(typeof(CredentialsViewModelValidator))]
    public class CredentialsViewModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
