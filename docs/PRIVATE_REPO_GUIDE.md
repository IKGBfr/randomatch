# 🔒 Guide : Passer le Repo en Privé

## ⚡ Impact sur le site en ligne

**Résumé** : ✅ AUCUN IMPACT sur le site déployé

---

## 📋 Étapes pour passer en privé

### 1. Sur GitHub

1. Va sur **https://github.com/IKGBfr/randomatch/settings**
2. Section **Danger Zone** (en bas)
3. Clique sur **Change visibility**
4. Choisis **Make private**
5. Confirme en tapant le nom du repo

### 2. Vérification Vercel (si déployé)

Si ton site est sur **Vercel** :

1. Va sur **https://vercel.com/dashboard**
2. Sélectionne ton projet
3. **Settings** → **Git**
4. Vérifie que la connexion est active : ✅ "Connected to GitHub"

**Important** : Si déjà connecté, Vercel garde l'accès automatiquement via l'app GitHub OAuth.

### 3. Vérification des déploiements

Après le passage en privé :

```bash
# Fait un petit changement pour tester
cd /Users/anthony/Projects/randomatch/rando

# Modifie un fichier
echo "# Test deploy" >> README.md

# Commit et push
git add README.md
git commit -m "test: Verify deployment after private repo"
git push origin main
```

Vérifie sur Vercel que le déploiement se lance automatiquement.

---

## ⚠️ Cas spéciaux

### Si le déploiement échoue après passage en privé

**Symptôme** : Vercel affiche "Repository not found"

**Solution** :

1. Sur Vercel, va dans **Settings** → **Git**
2. Clique sur **Disconnect**
3. Clique sur **Connect Git Provider**
4. Reconnecte ton repo GitHub (privé)
5. Autorise l'accès

### Si tu utilises GitHub Actions

Si tu as des workflows `.github/workflows/*.yml` :

1. Vérifie que les secrets sont configurés
2. GitHub Actions reste inclus dans le plan Free (2000 min/mois)
3. Aucun problème pour les repos privés

---

## 💡 Recommandations

### Pour RandoMatch Blog

**Mon avis** : Tu peux **rester PUBLIC** car :

1. ✅ C'est un site marketing (pas de code sensible)
2. ✅ Bon pour ton portfolio
3. ✅ Tous les secrets sont protégés
4. ✅ Aucun risque de sécurité

**MAIS** si tu préfères en privé pour le côté "professionnel", vas-y sans souci !

### Pour l'App Flutter principale

**Recommandation** : **PRIVÉ** car :

1. 🔒 Logique métier propriétaire
2. 🔒 Algorithmes de matching
3. 🔒 Stratégie business
4. 🔒 Architecture complète

---

## 🔄 Revenir en public plus tard

Si tu changes d'avis, tu peux repasser en public à tout moment :

1. GitHub → Settings → Danger Zone
2. Change visibility → Make public
3. Aucun impact sur Vercel/Netlify

---

## ✅ Checklist finale

Après passage en privé, vérifie :

- [ ] Site en ligne toujours accessible
- [ ] Vercel/Netlify connecté au repo
- [ ] Déploiement automatique fonctionne (test avec un commit)
- [ ] Variables d'environnement toujours configurées
- [ ] Aucune erreur dans les logs Vercel

---

## 🆘 Troubleshooting

### "Repository not found" sur Vercel

**Cause** : Vercel a perdu l'accès au repo privé

**Solution** :
1. Vercel → Settings → Git → Disconnect
2. Reconnecte le repo
3. Autorise l'accès aux repos privés

### Déploiement automatique ne fonctionne plus

**Cause** : Webhooks GitHub non configurés

**Solution** :
1. GitHub → Settings → Webhooks
2. Vérifie le webhook Vercel
3. Test delivery pour confirmer

### Collaborateurs ne peuvent plus voir le code

**Cause** : Repo privé = accès restreint

**Solution** :
1. GitHub → Settings → Collaborators
2. Invite les personnes avec accès (toi + Sigrid ?)
3. Ils reçoivent une invitation par email

---

## 📞 Support

Si problème après passage en privé :

1. **Vercel Support** : https://vercel.com/support
2. **GitHub Support** : https://support.github.com
3. **Moi (Claude)** : Montre-moi les erreurs ! 😄

---

**Dernière mise à jour** : 30 octobre 2025  
**Conclusion** : Passe en privé sans crainte, zéro impact sur le site ! ✅
