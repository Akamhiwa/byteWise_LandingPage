import { Link, useLocation } from 'react-router-dom';
import SubTitle from '../TextUi/SubTitle';

const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbItems = pathnames.map((value, index) => {
    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
    const isLast = index === pathnames.length - 1;

    return isLast ? (
        <span key={to} className="lg:text-[24px] md:text-[20px] text-[18px] font-semibold z-20 uppercase leading-snug tracking-wide w-   ">{value.charAt(0).toUpperCase() + value.slice(1)}</span>
    ) : ( 
        <Link key={to} className="lg:text-[24px] md:text-[20px] text-[18px] font-semibold z-20 uppercase leading-snug tracking-wide w-full">
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </Link>
    );
  });

  return (
    <div className="z-10 flex items-center  gap-2 italic ">   
            <Link to="/" className="lg:text-[24px] hover:text-Primary md:text-[20px] text-[18px] font-light z-20 uppercase leading-snug tracking-wide ">Home</Link>
            <SubTitle>/</SubTitle>
          {breadcrumbItems}
    </div>
  );
};

export default BreadCrumbs;
