using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace my_new_app.Models
{
    public interface IPieRepository
    {
        IEnumerable<Pie> GetAllPies();

        Pie GetPieById(int pieid);

        Pie Add(Pie item);
        
        bool Remove(int id);
        bool Update(Pie item);

    }
}
