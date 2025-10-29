'use client';
import { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { fbEvents } from '@/lib/fbPixel';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(165deg, #FFFFFF 0%, #FFF8FA 50%, #FFF0F5 100%);
  padding: 30px;
  text-align: center;
  font-family: 'Poppins', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  position: relative;
  

  
  @media (max-width: 768px) {
    padding: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

const ContentCard = styled.div`
  background: #FFFFFF;
  padding: 40px;
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(254, 60, 114, 0.1);
  animation: fadeIn 0.6s ease-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    padding: 25px 20px;
    max-width: calc(100% - 20px);
  }
  
  @media (max-width: 480px) {
    padding: 30px 20px;
    max-width: 100%;
    width: 100%;
    min-height: 100vh;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: none;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #1A1A1A;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 30px;
  color: #666666;
`;

const PromoTag = styled.div`
  background: linear-gradient(135deg, #FFF5F7, #FFF0F5);
  border: 2px solid #FE3C72;
  color: #E5326A;
  padding: 12px 15px;
  border-radius: 12px;
  margin-bottom: 25px;
  font-weight: 600;
  font-size: 0.95rem;
  box-shadow: 0 4px 12px rgba(254, 60, 114, 0.15);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  font-size: 0.95rem;
  margin-bottom: 8px;
  font-weight: 600;
  color: #374151;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  background: #F9FAFB;
  border: 2px solid #E5E7EB;
  border-radius: 10px;
  color: #1A1A1A;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #9CA3AF;
  }
  
  &:focus {
    outline: none;
    border-color: #FE3C72;
    background: #FFFFFF;
    box-shadow: 0 0 0 3px rgba(254, 60, 114, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 15px;
  background: #F9FAFB;
  border: 2px solid #E5E7EB;
  border-radius: 10px;
  color: #1A1A1A;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #FE3C72;
    background: #FFFFFF;
    box-shadow: 0 0 0 3px rgba(254, 60, 114, 0.1);
  }
  
  option {
    background: #FFFFFF;
    color: #1A1A1A;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #374151;
  font-weight: 500;
  
  input[type="radio"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #D1D5DB;
    border-radius: 50%;
    margin-right: 8px;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:checked {
      border-color: #FE3C72;
      background: #FE3C72;
      
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8px;
        height: 8px;
        background: white;
        border-radius: 50%;
      }
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: #FE3C72;
  background-image: linear-gradient(135deg, #E5326A, #FE3C72);
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(254, 60, 114, 0.4);
  position: relative;
  overflow: hidden;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  
  &::before {
    content: '💕';
    position: absolute;
    left: -30px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5rem;
    transition: left 0.3s ease;
  }
  
  &:hover {
    background: #D12A5E;
    background-image: linear-gradient(135deg, #D12A5E, #E5326A);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(254, 60, 114, 0.6);
    
    &::before {
      left: 20px;
    }
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SuccessMessage = styled.div`
  background: linear-gradient(135deg, #E5326A, #FE3C72);
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  animation: fadeIn 0.5s ease-out;
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    font-weight: bold;
  }
  
  p {
    font-size: 1.05rem;
    line-height: 1.6;
    margin: 10px 0;
  }
`;

const LaunchInfoBox = styled.div`
  background: linear-gradient(135deg, #FFF5F7, #FFF0F5);
  border: 2px solid rgba(254, 60, 114, 0.3);
  border-radius: 10px;
  padding: 15px;
  margin-top: 20px;
  
  strong {
    display: block;
    color: #E5326A;
    font-size: 1rem;
    margin-bottom: 8px;
  }
  
  p {
    font-size: 0.95rem;
    color: #666666;
    margin: 0;
  }
`;

const ErrorMessage = styled.div`
  background: rgba(220, 53, 69, 0.2);
  border: 2px solid #dc3545;
  color: #ff6b6b;
  padding: 12px;
  border-radius: 10px;
  margin-bottom: 20px;
  text-align: center;
`;

const Disclaimer = styled.p`
  font-size: 0.85rem;
  margin-top: 20px;
  color: #9CA3AF;
  text-align: center;
`;

const departments = [
  { value: "01", label: "01 - Ain" },
  { value: "02", label: "02 - Aisne" },
  { value: "03", label: "03 - Allier" },
  { value: "04", label: "04 - Alpes-de-Haute-Provence" },
  { value: "05", label: "05 - Hautes-Alpes" },
  { value: "06", label: "06 - Alpes-Maritimes" },
  { value: "07", label: "07 - Ardèche" },
  { value: "08", label: "08 - Ardennes" },
  { value: "09", label: "09 - Ariège" },
  { value: "10", label: "10 - Aube" },
  { value: "11", label: "11 - Aude" },
  { value: "12", label: "12 - Aveyron" },
  { value: "13", label: "13 - Bouches-du-Rhône" },
  { value: "14", label: "14 - Calvados" },
  { value: "15", label: "15 - Cantal" },
  { value: "16", label: "16 - Charente" },
  { value: "17", label: "17 - Charente-Maritime" },
  { value: "18", label: "18 - Cher" },
  { value: "19", label: "19 - Corrèze" },
  { value: "2A", label: "2A - Corse-du-Sud" },
  { value: "2B", label: "2B - Haute-Corse" },
  { value: "21", label: "21 - Côte-d'Or" },
  { value: "22", label: "22 - Côtes-d'Armor" },
  { value: "23", label: "23 - Creuse" },
  { value: "24", label: "24 - Dordogne" },
  { value: "25", label: "25 - Doubs" },
  { value: "26", label: "26 - Drôme" },
  { value: "27", label: "27 - Eure" },
  { value: "28", label: "28 - Eure-et-Loir" },
  { value: "29", label: "29 - Finistère" },
  { value: "30", label: "30 - Gard" },
  { value: "31", label: "31 - Haute-Garonne" },
  { value: "32", label: "32 - Gers" },
  { value: "33", label: "33 - Gironde" },
  { value: "34", label: "34 - Hérault" },
  { value: "35", label: "35 - Ille-et-Vilaine" },
  { value: "36", label: "36 - Indre" },
  { value: "37", label: "37 - Indre-et-Loire" },
  { value: "38", label: "38 - Isère" },
  { value: "39", label: "39 - Jura" },
  { value: "40", label: "40 - Landes" },
  { value: "41", label: "41 - Loir-et-Cher" },
  { value: "42", label: "42 - Loire" },
  { value: "43", label: "43 - Haute-Loire" },
  { value: "44", label: "44 - Loire-Atlantique" },
  { value: "45", label: "45 - Loiret" },
  { value: "46", label: "46 - Lot" },
  { value: "47", label: "47 - Lot-et-Garonne" },
  { value: "48", label: "48 - Lozère" },
  { value: "49", label: "49 - Maine-et-Loire" },
  { value: "50", label: "50 - Manche" },
  { value: "51", label: "51 - Marne" },
  { value: "52", label: "52 - Haute-Marne" },
  { value: "53", label: "53 - Mayenne" },
  { value: "54", label: "54 - Meurthe-et-Moselle" },
  { value: "55", label: "55 - Meuse" },
  { value: "56", label: "56 - Morbihan" },
  { value: "57", label: "57 - Moselle" },
  { value: "58", label: "58 - Nièvre" },
  { value: "59", label: "59 - Nord" },
  { value: "60", label: "60 - Oise" },
  { value: "61", label: "61 - Orne" },
  { value: "62", label: "62 - Pas-de-Calais" },
  { value: "63", label: "63 - Puy-de-Dôme" },
  { value: "64", label: "64 - Pyrénées-Atlantiques" },
  { value: "65", label: "65 - Hautes-Pyrénées" },
  { value: "66", label: "66 - Pyrénées-Orientales" },
  { value: "67", label: "67 - Bas-Rhin" },
  { value: "68", label: "68 - Haut-Rhin" },
  { value: "69", label: "69 - Rhône" },
  { value: "70", label: "70 - Haute-Saône" },
  { value: "71", label: "71 - Saône-et-Loire" },
  { value: "72", label: "72 - Sarthe" },
  { value: "73", label: "73 - Savoie" },
  { value: "74", label: "74 - Haute-Savoie" },
  { value: "75", label: "75 - Paris" },
  { value: "76", label: "76 - Seine-Maritime" },
  { value: "77", label: "77 - Seine-et-Marne" },
  { value: "78", label: "78 - Yvelines" },
  { value: "79", label: "79 - Deux-Sèvres" },
  { value: "80", label: "80 - Somme" },
  { value: "81", label: "81 - Tarn" },
  { value: "82", label: "82 - Tarn-et-Garonne" },
  { value: "83", label: "83 - Var" },
  { value: "84", label: "84 - Vaucluse" },
  { value: "85", label: "85 - Vendée" },
  { value: "86", label: "86 - Vienne" },
  { value: "87", label: "87 - Haute-Vienne" },
  { value: "88", label: "88 - Vosges" },
  { value: "89", label: "89 - Yonne" },
  { value: "90", label: "90 - Territoire de Belfort" },
  { value: "91", label: "91 - Essonne" },
  { value: "92", label: "92 - Hauts-de-Seine" },
  { value: "93", label: "93 - Seine-Saint-Denis" },
  { value: "94", label: "94 - Val-de-Marne" },
  { value: "95", label: "95 - Val-d'Oise" },
  { value: "971", label: "971 - Guadeloupe" },
  { value: "972", label: "972 - Martinique" },
  { value: "973", label: "973 - Guyane" },
  { value: "974", label: "974 - La Réunion" },
  { value: "976", label: "976 - Mayotte" }
];

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    department: '',
    gender: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        
        // Track Facebook Pixel Lead event
        fbEvents.lead();
      } else {
        setError(result.error || 'Une erreur est survenue');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Erreur de connexion. Réessaye.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
        <ContentCard>
          <Title>🥾 RandoMatch 💕</Title>
          <Subtitle>L&apos;app arrive bientôt ! Sois parmi les premiers avertis</Subtitle>
          
          {!success ? (
            <>
              <PromoTag>
                ⚡ Sois averti·e en priorité du lancement dans ta région
              </PromoTag>
              
              {error && <ErrorMessage>{error}</ErrorMessage>}
              
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Jean"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="jean@exemple.fr"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="department">Département</Label>
                  <Select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Sélectionne ton département</option>
                    {departments.map(dept => (
                      <option key={dept.value} value={dept.value}>
                        {dept.label}
                      </option>
                    ))}
                  </Select>
                </FormGroup>
                
                <FormGroup>
                  <Label>Genre</Label>
                  <RadioGroup>
                    <RadioOption>
                      <input
                        type="radio"
                        name="gender"
                        value="H"
                        onChange={handleInputChange}
                        required
                      />
                      <span>Homme</span>
                    </RadioOption>
                    <RadioOption>
                      <input
                        type="radio"
                        name="gender"
                        value="F"
                        onChange={handleInputChange}
                        required
                      />
                      <span>Femme</span>
                    </RadioOption>
                  </RadioGroup>
                </FormGroup>
                
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Inscription en cours...' : 'Me prévenir du lancement'}
                </SubmitButton>
              </form>
            </>
          ) : (
            <SuccessMessage>
              <h2>🎉 Parfait, tu es sur la liste !</h2>
              <p>On te préviendra dès que RandoMatch sera disponible.</p>
              
              <LaunchInfoBox>
                <strong>🚀 Lancement imminent</strong>
                <p>Tu seras parmi les tout premiers alertés ! Reste connecté·e 🏔️</p>
              </LaunchInfoBox>
            </SuccessMessage>
          )}
          
          <Disclaimer>
            Données protégées selon RGPD. En t&apos;inscrivant, tu acceptes nos <Link href="/legal/mentions" style={{ color: '#FE3C72', textDecoration: 'underline' }}>conditions</Link>.
          </Disclaimer>
        </ContentCard>
      </Container>
  );
}