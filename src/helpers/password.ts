type PasswordProps = {
  strength?: 'weak' | 'medium' | 'strong' | 'very-strong'
  length?: number
  options?: {
    numbers: boolean
    symbols: boolean
    uppercase: boolean
    lowercase: boolean
    excludeSimilarCharacters: boolean
    excludeAmbiguousCharacters: boolean
  }
}

export function generateRandomPassword(props: PasswordProps) {
  const { strength = 'strong', length = 12, options } = props

  let charset = ''

  if (options?.uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if (options?.lowercase) charset += 'abcdefghijklmnopqrstuvwxyz'
  if (options?.numbers) charset += '0123456789'
  if (options?.symbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?'

  // --------------------------------------------------------------------------------
  // 📌  Generate randomize string
  // make sure the password matches the strength
  // --------------------------------------------------------------------------------
  let password = ''

  // while (calculatePasswordStrength(password) !== strength) {
  //   password = ''
  //   for (let i = 0; i < length; i++) {
  //     password += charset.charAt(Math.floor(Math.random() * charset.length))
  //   }
  // }

  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length))
  }

  return password
}

export function calculatePasswordStrength(password: string) {
  let strength = 0

  if (password.length < 6) return 'weak'
  if (password.length >= 8) strength++
  if (password.length > 12) strength++
  if (password.match(/[a-z]+/)) strength++
  if (password.match(/[A-Z]+/)) strength++
  if (password.match(/[0-9]+/)) strength++
  if (password.match(/[$@#&!]+/)) strength++

  if (strength < 3) return 'weak'
  if (strength < 4) return 'medium'
  if (strength < 5) return 'strong'

  return 'very-strong'
}
