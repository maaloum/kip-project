
import { TdBank } from '../../constants/Bank';
import CardButton from '../../components/Cards/CardButton';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

function TD() {
    return (
        <>
          <Breadcrumb pageName="Banks" />
          <section id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {TdBank.map((product, index) => (
         
               <CardButton key= {index} product={product} index=  {index} />
            ))}
    </section>
          
         
        </>
      );
}

export default TD