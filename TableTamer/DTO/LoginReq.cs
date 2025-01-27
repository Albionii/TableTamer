using System.ComponentModel.DataAnnotations;

namespace TableTamer.DTO
{
    public class LoginReq
    {
        [Required] 
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
