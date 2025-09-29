'use client';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1a3a52 0%, #2d5f7f 25%, #4a8fb9 50%, #6ba6cd 75%, #8fc4e0 100%);
  background-size: 400% 400%;
  animation: gradientShift 20s ease infinite;
  color: white;
  padding: 30px;
  text-align: center;
  font-family: 'Poppins', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  position: relative;
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @media (max-width: 768px) {
    padding: 15px;
  }
  
  @media (max-width: 480px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

const ContentCard = styled.div`
  background: rgba(20, 30, 48, 0.85);
  backdrop-filter: blur(20px);
  padding: 40px;
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.1);
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
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
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
  opacity: 0.95;
`;

const CounterBadge = styled.div`
  background: linear-gradient(135deg, #4a7044, #6b8e23);
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 25px;
  box-shadow: 0 6px 20px rgba(75, 112, 68, 0.4);
`;

const CounterNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const CounterText = styled.div`
  font-size: 0.9rem;
  opacity: 0.95;
`;

const PromoTag = styled.div`
  background: rgba(255, 193, 7, 0.2);
  border: 2px solid #ffc107;
  color: #ffc107;
  padding: 10px 15px;
  border-radius: 8px;
  margin-bottom: 25px;
  font-weight: 600;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  text-align: left;
`;

const Label = styled.label`
  display: block;
  font-size: 0.95rem;
  margin-bottom: 8px;
  font-weight: 500;
  opacity: 0.95;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid rgba(74, 112, 68, 0.3);
  border-radius: 10px;
  color: #1a3a52;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(26, 58, 82, 0.5);
  }
  
  &:focus {
    outline: none;
    border-color: #4a7044;
    background: white;
    box-shadow: 0 0 15px rgba(74, 112, 68, 0.2);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.95);
  border: 2px solid rgba(74, 112, 68, 0.3);
  border-radius: 10px;
  color: #1a3a52;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #4a7044;
    background: white;
    box-shadow: 0 0 15px rgba(74, 112, 68, 0.2);
  }
  
  option {
    background: white;
    color: #1a3a52;
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
  
  input[type="radio"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    margin-right: 8px;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:checked {
      border-color: #6b8e23;
      background: #6b8e23;
      
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
  background: linear-gradient(135deg, #4a7044, #6b8e23);
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
  box-shadow: 0 4px 15px rgba(75, 112, 68, 0.4);
  position: relative;
  overflow: hidden;
  
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
    background: linear-gradient(135deg, #355e38, #4a7044);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(75, 112, 68, 0.6);
    
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
  background: linear-gradient(135deg, #4a7044, #6b8e23);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  animation: fadeIn 0.5s ease-out;
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
`;

const ErrorMessage = styled.div`
  background: rgba(220, 53, 69, 0.2);
  border: 2px solid #dc3545;
  color: #ff6b6b;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
`;

const Disclaimer = styled.p`
  font-size: 0.85rem;
  margin-top: 20px;
  opacity: 0.8;
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
  const [counter, setCounter] = useState(73);
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    department: '',
    gender: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Animate counter on load
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCounter(prev => {
          if (prev < 76) return prev + 1;
          clearInterval(interval);
          return prev;
        });
      }, 50);
    }, 500);

    // Periodic increment
    const periodicTimer = setInterval(() => {
      if (Math.random() > 0.8) {
        setCounter(prev => {
          if (prev >= 99) return 73;
          return prev + 1;
        });
      }
    }, 25000);

    return () => {
      clearTimeout(timer);
      clearInterval(periodicTimer);
    };
  }, []);

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
        setCounter(prev => prev + 1);
      } else {
        setError(result.error || 'Une erreur est survenue');
      }
    } catch (error) {
      setError('Erreur de connexion. Réessaye.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>RandoMatch - Trouve ton partenaire de randonnée !</title>
        <meta name="description" content="Rejoins des célibataires pour des randonnées en France. Trouve ton match parfait !" />
        <meta property="og:title" content="RandoMatch - Rencontres pour Randonneurs" />
        <meta property="og:description" content="L'app de rencontres dédiée aux passionnés de randonnée" />
        <meta property="og:image" content="/bg.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Container>
        <ContentCard>
          <Title>🥾 RandoMatch 💕</Title>
          <Subtitle>Trouve ton partenaire de randonnée idéal</Subtitle>
          
          {!success ? (
            <>
              <CounterBadge>
                <CounterNumber>{counter}</CounterNumber>
                <CounterText>randonneurs inscrits</CounterText>
              </CounterBadge>
              
              <PromoTag>
                🎁 Les 100 premiers = ACCÈS GRATUIT À VIE !
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
                  {isSubmitting ? 'Inscription en cours...' : 'Rejoindre la communauté'}
                </SubmitButton>
              </form>
            </>
          ) : (
            <SuccessMessage>
              <h2>🎉 Bienvenue dans RandoMatch !</h2>
              <p>Vérifie ta boîte mail pour confirmer ton inscription.</p>
            </SuccessMessage>
          )}
          
          <Disclaimer>
            Données protégées selon RGPD. En t'inscrivant, tu acceptes nos conditions.
          </Disclaimer>
        </ContentCard>
      </Container>
    </>
  );
}