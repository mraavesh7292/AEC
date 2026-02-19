import nodemailer from 'nodemailer';

export async function sendDailyReminder(email: string, juz: number) {
  const transporter = nodemailer.createTransport({ jsonTransport: true });
  await transporter.sendMail({
    from: 'noreply@quraniyah.app',
    to: email,
    subject: 'Daily Quran Reminder',
    text: `Today\'s assigned recitation: Juz ${juz}`
  });
}
