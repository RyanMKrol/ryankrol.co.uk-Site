/**
 * Handles the hello api calls
 * @param {Request} req request
 * @param {Response} res response
 */
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
  console.log('things');
}
