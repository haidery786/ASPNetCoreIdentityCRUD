using my_new_app.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace my_new_app.Controllers
{
    [Authorize]
    public class FeedbackController :Controller
    {
        private readonly IFeedbackRepository _feedbackrep;

        public FeedbackController(IFeedbackRepository feedbackrep)
        {
            _feedbackrep = feedbackrep;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(Feedback feedback)
        {
            if (ModelState.IsValid)
            {
                _feedbackrep.AddFeedback(feedback);

                return RedirectToAction("FeedbackComplete");
            }

            else
            {
                return View(feedback);
            }
        }

        public IActionResult FeedbackComplete()
        {
            return View();
        }
    }
}
