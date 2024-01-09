import CheckoutFuntion from "@/src/components/CheckoutFuntion";
import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import { useState } from "react";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ImgCrop from 'antd-img-crop';
import { Upload, Spin, message } from 'antd';
import Iconify from '@/src/components/iconify';
import {onPreviewCompetitionCover} from '@/src/utils/traitementFile';
import ConsumApi from '@/src/services_workers/consum_api';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const CreateCandidature = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [size, setSize] = useState("");
  const [yearBirth, setYearBirth] = useState("");
  const [contact, setContact] = useState("");
  const [studyLevel, setstudyLevel] = useState("");
  const [countryResidence, setCountryResidence] = useState("");
  const [townResidence, setTownResidence] = useState("");
  const [photoName, setphotoName] = useState("");
  const [base64, setBase64] = useState("");
  const [fileList, setFileList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onChangeCompetitionCover = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList.length > 0) {
      const nameFile = `${newFileList[0].uid}.${newFileList[0].type.split('/')[1]}`;
      setphotoName(nameFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setBase64(base64String);
      };
      reader.readAsDataURL(newFileList[0].originFileObj);
    }
    return false;
  };

  const submit = async () => {
    if(firstName.trim().length > 2 && lastName.trim().length > 2 && size.trim().length > 2 && yearBirth.trim().length > 1 && contact.trim().length > 2 && studyLevel.trim().length > 2 && countryResidence.trim().length > 2 && photoName.trim().length > 2 && townResidence.trim().length > 2) {
      setIsLoading(true);
      const newCandidate = await ConsumApi.createCandidate({firstName, lastName, size, yearBirth,contact,studyLevel,countryResidence, name_file: photoName, base64, cityResidence: townResidence});
      
      if(newCandidate.success) {
        setFirstName('');
        setlastName('');
        setSize('');
        setContact('');
        setstudyLevel('');
        setCountryResidence('');
        setTownResidence('');
        setphotoName('');
        setYearBirth('');
        setBase64('');
        setFileList([]);
        setIsLoading(false);
        message.success("Enregistrer avec succès");
      } else {
        message.error(newCandidate.message);
        
      }
      
    } else {
      message.error("Veuillez remplir tous les champs d'abord");
    }
    // console.log({firstName, lastName, size, yearBirth,contact,studyLevel, countryResidence , photo: photoName, base64, townResidence});
    
  }

  return (
    <Layout>
      <section
        className="hero-section about checkout gap"
        style={{ backgroundImage: "url(/assets/img/background-3.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="about-text pricing-table">
                <ul
                  className="crumbs d-flex"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  data-aos-duration={300}
                >
                  <li>
                    <Link href="/">Accueil</Link>
                  </li>
                  
                  <li className="two">
                    <Link href="/">
                      <i className="fa-solid fa-right-long" />
                      Candidature
                    </Link>
                  </li>
                </ul>
                <h2
                  data-aos="fade-up"
                  data-aos-delay={300}
                  data-aos-duration={400}
                >
                  Postulez pour être une candidate de notre future édition
                </h2>

              </div>
            </div>
            <div
              className="col-xl-5 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={200}
              data-aos-duration={300}
            >
              <CheckoutFuntion />
            </div>
            <div
              className="offset-xl-1 col-xl-6 col-lg-12"
              data-aos="flip-up"
              data-aos-delay={300}
              data-aos-duration={400}
            >
              <form
                onSubmit={(e) => e.preventDefault()}
                className="checkout-form"
              >
                <h4>information</h4>
                  <Stack direction="row" alignItems="center" justifyContent="center" mb={1} sx={{width: '100%'}}>
                    <ImgCrop showGrid rotationSlider aspectSlider showReset>
                      <Upload
                        listType="picture"
                        accept='image/png, image/jpeg'
                        fileList={fileList}
                        beforeUpload={(file) => false}
                        onChange={onChangeCompetitionCover}
                        onPreview={onPreviewCompetitionCover}
                      >
                        {fileList.length < 1 && (
                        <Box component='div' sx={{width: 300, border: 'dashed #e0e0e0', borderRadius: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column', padding: 2, cursor: 'pointer'}}>
                            <Iconify icon="openmoji:picture" />
                          <span className="ant-upload-text">Charger une photo de couverture</span>
                        </Box>
                        )
                        }
                      </Upload>
                    </ImgCrop>
                  </Stack>
                <div className="row">
                  <div className="col-lg-6">
                    <input value={firstName} onChange={(event) => {setFirstName(event.target.value)}} type="text" name="name" placeholder="Votre Nom" />
                  </div>
                  <div className="col-lg-6">
                    <input value={lastName} onChange={(event) => {setlastName(event.target.value)}} type="text" name="firstname" placeholder="Votre Prénom" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" value={size} onChange={(event) => {setSize(event.target.value)}} name="taille" placeholder="Votre Taille (Ex: 178 cm)" />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" value={contact} onChange={(event) => {setContact(event.target.value)}} name="phone" placeholder="Téléphone (Ex: +225 xxxxxxxxxx)" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" value={studyLevel} onChange={(event) => {setstudyLevel(event.target.value)}} name="studyLevel" placeholder="Votre niveau d'étude" />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" value={yearBirth} onChange={(event) => {setYearBirth(event.target.value)}} name="yearBirth" placeholder="Votre âge" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <h4 className="two">Pays de résidence</h4>
                    <Select
                    fullWidth
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={countryResidence}
                      label="Pays de résidence"
                      onChange={(event) => {setCountryResidence(event.target.value)}}
                    >
                      <MenuItem value={"Côte d'ivoire"} >Côte d'ivoire</MenuItem>
                      <MenuItem value={"France"} >France</MenuItem>
                      <MenuItem value={"Canada"} >Canada</MenuItem>
                    </Select>
                    
                  </div>
                  <div className="col-lg-6">
                    <h4 className="two">Ville de résidence</h4>
                    <input type="text" value={townResidence} onChange={(event) => {setTownResidence(event.target.value)}} name="phone" placeholder="Abidjan" />
                  </div>
                </div>
                <Spin spinning={isLoading}>
                  <button className="button-price" onClick={submit}>Enregistrer</button>
                </Spin>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default CreateCandidature;
