import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  if(!dateString) return <time/>
  const date = parseISO(dateString)
	return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
