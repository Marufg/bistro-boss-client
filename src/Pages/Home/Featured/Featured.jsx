import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-4 my-10">
            <SectionTitle subHeading="Check It Out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-50 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit vitae ducimus, delectus unde, ab sapiente minus numquam nostrum sunt repellat ratione quasi veniam culpa consectetur dignissimos itaque quisquam? Deserunt, expedita!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;