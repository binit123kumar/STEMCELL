import React from "react";
import "../Styles/Faculty.css";
// import Staff from "../Assests/staff1.jpg";
// import Staff1 from'../Assests/staff2.jpg'
// import Staff1 from "../Assests/staff3.jpg";
import HOD from "../Assests/HOD.png";
function Faculty() {
  return (
    <>
      <div className="Faculty-box">
        <h1>Faculty</h1>
        <img src={HOD} alt="HOD" />
        <h3>Dr. H. N. Diwaker</h3>
        <p style={{ textAlign: "justify" }}>It gives me immense pleasure to announce the official launch of the School of Stem Cell Technology. This marks a significant milestone not only for our department as well for the broader scientific and academic community. The establishment of this school reflects our unwavering commitment to pushing the frontiers of biomedical research, regenerative medicine, and translational science.
Stem cell technology holds transformative potential in the treatment of degenerative diseases, injury repair, and the understanding of human development. Existence of Stem Cell in our body has great medical potential. When stem cell divides each new cell can become another type of cell with specialized function such as muscle cell, red blood cell or nerve cells etc. Regeneration abilities offer new potential for treating diseases such as Diabetes, Neurological Disease, Duscenne, Nonunion of bone fracture, tendon repair, muscular dystrophy, heart disease, spinal cord injury. Therefore, a centre for stem cell study and therapy would prove constructive and revolutionary in health and research sectors in Bihar. 
We are proud to bring together a distinguished guest faculty, cutting-edge research infrastructure, and strong industry partnerships to create an environment that fosters innovation and excellence. The School of Stem Cell Technology will serve as a hub for pioneering research, advanced training programs and impactful collaborations both nationally and internationally.
I extend my heartfelt gratitude towards The Hon’ble Chief Minister of Bihar, Shri Nitish Kumar Ji, for entrusting me with such a great responsibility and his continuous support in developing the School of Stem Cell Technology. I am also grateful to Prof. Sharad kumar Yadav, Hon’ble Vice-Chancellor of his unwavering support. I am thankful to our guest faculties, researchers, administrative staff, well wishers and supporters whose dedication and hard work have made this launch possible. Together, let us shape the future of regenerative medicine and biomedical science.
</p>
        {/* <h3>
          B.Tech, M.Tech, PhD in Civil (Water Resource Engineering), Jamia
          Millia Islamia (Central University)
        </h3>
        <h3>Ex Flood Modeller in Water Resource Department, Govt. of Bihar</h3>
        <h3>Assistant Professor</h3>
        <h3>School of River Studies</h3> */}
      </div>
    </>
  );
}

export default Faculty;
