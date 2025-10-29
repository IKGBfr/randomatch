'use client';

import { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { fbEvents } from '@/lib/fbPixel';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(165deg, #FFFFFF 0%, #FFF8FA 50%, #FFF0F5 100%);
  padding: 0;
  
  @media (min-width: 769px) {
    padding: 80px 20px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

const FormCard = styled.div`
  background: #FFFFFF;
  padding: 32px 24px;
  min-height: 100vh;
  
  @media (min-width: 769px) {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    border-radius: 16px;
    padding: 64px;
    min-height: auto;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #000000;
  margin: 0;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 48px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 32px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #333333;
  letter-spacing: -0.01em;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  font-size: 1rem;
  color: #000000;
  transition: all 0.2s ease;
  
  &::placeholder {
    color: #999999;
  }
  
  &:focus {
    outline: none;
    border-color: #000000;
    background: #FFFFFF;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 14px 16px;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 8px;
  font-size: 1rem;
  color: #000000;
  font-family: inherit;
  resize: vertical;
  min-height: 160px;
  transition: all 0.2s ease;
  
  &::placeholder {
    color: #999999;
  }
  
  &:focus {
    outline: none;
    border-color: #000000;
    background: #FFFFFF;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #000000;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.2s ease;
  margin-top: 8px;
  
  &:hover:not(:disabled) {
    background: #333333;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background: #F0FDF4;
  border: 1px solid #BBF7D0;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const SuccessContent = styled.div`
  flex: 1;
`;

const SuccessTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #166534;
  margin: 0 0 8px 0;
`;

const SuccessText = styled.p`
  font-size: 0.9375rem;
  color: #15803D;
  margin: 0;
`;

const ErrorMessage = styled.div`
  background: #FEF2F2;
  border: 1px solid #FECACA;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const ErrorText = styled.p`
  font-size: 0.9375rem;
  color: #DC2626;
  margin: 0;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-top: 32px;
  font-size: 0.9375rem;
  color: #666666;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
  
  &:hover {
    color: #000000;
  }
`;

const Spinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #FFFFFF;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const HiddenInput = styled.input`
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
`;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '', // Honeypot
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Erreur lors de l\'envoi');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', website: '' });
      
      // Track Facebook Pixel Contact event
      fbEvents.contact();
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Erreur inconnue');
    }
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <FormCard>
          <Header>
            <Mail style={{ width: 32, height: 32, color: '#000000' }} />
            <Title>Contact</Title>
          </Header>

          <Description>
            Une question, une suggestion ou besoin d'aide ? N'hésitez pas à nous contacter.
          </Description>

          {status === 'success' ? (
            <SuccessMessage>
              <CheckCircle2 style={{ width: 24, height: 24, color: '#16A34A', flexShrink: 0, marginTop: 2 }} />
              <SuccessContent>
                <SuccessTitle>Message envoyé</SuccessTitle>
                <SuccessText>
                  Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                </SuccessText>
              </SuccessContent>
            </SuccessMessage>
          ) : (
            <Form onSubmit={handleSubmit}>
              {/* Honeypot - champ caché anti-bot */}
              <HiddenInput
                type="text"
                name="website"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
              />

              {status === 'error' && (
                <ErrorMessage>
                  <AlertCircle style={{ width: 20, height: 20, color: '#DC2626', flexShrink: 0, marginTop: 2 }} />
                  <ErrorText>{errorMessage}</ErrorText>
                </ErrorMessage>
              )}

              <FormGroup>
                <Label htmlFor="name">Nom complet *</Label>
                <Input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jean Dupont"
                  disabled={status === 'loading'}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email *</Label>
                <Input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jean@exemple.fr"
                  disabled={status === 'loading'}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="subject">Sujet *</Label>
                <Input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Question sur la pré-inscription"
                  disabled={status === 'loading'}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message *</Label>
                <TextArea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Votre message..."
                  disabled={status === 'loading'}
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <>
                    <Spinner />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send style={{ width: 20, height: 20 }} />
                    Envoyer le message
                  </>
                )}
              </SubmitButton>
            </Form>
          )}

          <BackLink href="/">
            ← Retour à l'accueil
          </BackLink>
        </FormCard>
      </ContentWrapper>
    </PageContainer>
  );
}
