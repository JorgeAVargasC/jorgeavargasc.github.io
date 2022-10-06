
export default function getAge (date) {
  const today = new Date()
  const birthday = new Date(date)
  let age = today.getFullYear() - birthday.getFullYear()
  const m = today.getMonth() - birthday.getMonth()

  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--
  }

  return age
}
