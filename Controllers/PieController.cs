using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using my_new_app.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace my_new_app.Controllers
{
      [Route("api/[controller]")]
  public class PieDataController : Controller
    {
        private readonly IPieRepository _pieRepository;

        public PieDataController(IPieRepository pieRepository)
        {
            _pieRepository = pieRepository;
        }

        [HttpGet]
        public IEnumerable<Pie> GetAll()
        {
           var pies = _pieRepository.GetAllPies().OrderBy(p => p.Name);

        //    List<Pie> pies = new List<Pie>
        //     {
        //         new Pie() { Name = "Apple Pie", Price = 12.95M, ShortDescription = "Our famous apple pies!", LongDescription = "Icing carrot cake jelly-o cheesecake. Sweet roll marzipan marshmallow toffee brownie brownie candy tootsie roll. Chocolate cake gingerbread tootsie roll oat cake pie chocolate bar cookie dragée brownie. Lollipop cotton candy cake bear claw oat cake. Dragée candy canes dessert tart. Marzipan dragée gummies lollipop jujubes chocolate bar candy canes. Icing gingerbread chupa chups cotton candy cookie sweet icing bonbon gummies. Gummies lollipop brownie biscuit danish chocolate cake. Danish powder cookie macaroon chocolate donut tart. Carrot cake dragée croissant lemon drops liquorice lemon drops cookie lollipop toffee. Carrot cake carrot cake liquorice sugar plum topping bonbon pie muffin jujubes. Jelly pastry wafer tart caramels bear claw. Tiramisu tart pie cake danish lemon drops. Brownie cupcake dragée gummies.", ImageUrl = "https://gillcleerenpluralsight.blob.core.windows.net/files/applepie.jpg", IsPieOfTheWeek = true, ImageThumbnailUrl = "https://gillcleerenpluralsight.blob.core.windows.net/files/applepiesmall.jpg" },
        //         new Pie() { Name = "Blueberry Cheese Cake", Price = 18.95M, ShortDescription = "You'll love it!", LongDescription = "Icing carrot cake jelly-o cheesecake. Sweet roll marzipan marshmallow toffee brownie brownie candy tootsie roll. Chocolate cake gingerbread tootsie roll oat cake pie chocolate bar cookie dragée brownie. Lollipop cotton candy cake bear claw oat cake. Dragée candy canes dessert tart. Marzipan dragée gummies lollipop jujubes chocolate bar candy canes. Icing gingerbread chupa chups cotton candy cookie sweet icing bonbon gummies. Gummies lollipop brownie biscuit danish chocolate cake. Danish powder cookie macaroon chocolate donut tart. Carrot cake dragée croissant lemon drops liquorice lemon drops cookie lollipop toffee. Carrot cake carrot cake liquorice sugar plum topping bonbon pie muffin jujubes. Jelly pastry wafer tart caramels bear claw. Tiramisu tart pie cake danish lemon drops. Brownie cupcake dragée gummies.", ImageUrl = "https://gillcleerenpluralsight.blob.core.windows.net/files/blueberrycheesecake.jpg", IsPieOfTheWeek = false, ImageThumbnailUrl = "https://gillcleerenpluralsight.blob.core.windows.net/files/blueberrycheesecakesmall.jpg" },
        //         new Pie()  { Name = "Cheese Cake", Price = 18.95M, ShortDescription = "Plain cheese cake. Plain pleasure.", LongDescription = "Icing carrot cake jelly-o cheesecake. Sweet roll marzipan marshmallow toffee brownie brownie candy tootsie roll. Chocolate cake gingerbread tootsie roll oat cake pie chocolate bar cookie dragée brownie. Lollipop cotton candy cake bear claw oat cake. Dragée candy canes dessert tart. Marzipan dragée gummies lollipop jujubes chocolate bar candy canes. Icing gingerbread chupa chups cotton candy cookie sweet icing bonbon gummies. Gummies lollipop brownie biscuit danish chocolate cake. Danish powder cookie macaroon chocolate donut tart. Carrot cake dragée croissant lemon drops liquorice lemon drops cookie lollipop toffee. Carrot cake carrot cake liquorice sugar plum topping bonbon pie muffin jujubes. Jelly pastry wafer tart caramels bear claw. Tiramisu tart pie cake danish lemon drops. Brownie cupcake dragée gummies.", ImageUrl = "https://gillcleerenpluralsight.blob.core.windows.net/files/cheesecake.jpg", IsPieOfTheWeek = false, ImageThumbnailUrl = "https://gillcleerenpluralsight.blob.core.windows.net/files/cheesecakesmall.jpg" },
        //         new Pie()  { Name = "Cherry Pie", Price = 15.95M, ShortDescription = "A summer classic!", LongDescription = "Icing carrot cake jelly-o cheesecake. Sweet roll marzipan marshmallow toffee brownie brownie candy tootsie roll. Chocolate cake gingerbread tootsie roll oat cake pie chocolate bar cookie dragée brownie. Lollipop cotton candy cake bear claw oat cake. Dragée candy canes dessert tart. Marzipan dragée gummies lollipop jujubes chocolate bar candy canes. Icing gingerbread chupa chups cotton candy cookie sweet icing bonbon gummies. Gummies lollipop brownie biscuit danish chocolate cake. Danish powder cookie macaroon chocolate donut tart. Carrot cake dragée croissant lemon drops liquorice lemon drops cookie lollipop toffee. Carrot cake carrot cake liquorice sugar plum topping bonbon pie muffin jujubes. Jelly pastry wafer tart caramels bear claw. Tiramisu tart pie cake danish lemon drops. Brownie cupcake dragée gummies.", ImageUrl = "https://gillcleerenpluralsight.blob.core.windows.net/files/cherrypie.jpg", IsPieOfTheWeek = false, ImageThumbnailUrl = "https://gillcleerenpluralsight.blob.core.windows.net/files/cherrypiesmall.jpg" },
                
        //     };

           return pies;
       
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var pie = _pieRepository.GetPieById(id);
            if (pie == null)
            {
                return NotFound();
            }
            return new ObjectResult(pie);
        }

        
         // POST: api/pies
        //TODO Add New pie 
        [HttpPost]
        public IActionResult Post([FromBody]Pie pie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Pie newPie = _pieRepository.Add(pie);

            if (newPie == null)
            {
                return BadRequest("New pie is Null");
            }
            else
            {                
                return new ObjectResult(pie);       
            }           
        }

       // PUT: api/pies/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Pie item)
        {
            if (item == null )
            {
                return BadRequest();
            }
            if (!_pieRepository.Update(item))
            {
                return BadRequest();
            }
            else
            {
               var upd_pie = _pieRepository.GetPieById(item.Id);
                if (upd_pie == null)
                {
                    return NotFound();
                }
                return new ObjectResult(upd_pie);

            }
          
        }

      ///  DELETE: api/piess/5
        [HttpDelete("{id}")]        
        public IActionResult Delete(int id)
        {
            var pie = _pieRepository.GetPieById(id);;
            if (pie == null)
            {
                return NotFound();
            }

            if (_pieRepository.Remove(id))
            {
                return Ok(pie);
            }
            else
            {
                return BadRequest("pie is not Deleted");
            }
           
        }
        
    }
}
