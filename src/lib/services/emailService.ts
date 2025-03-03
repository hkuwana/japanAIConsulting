import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

// Your business email
const fromEmail = 'ai-consulting@yourdomain.jp';

// Generate sample recommendations based on user data
function generateRecommendations(userData) {
    // This is a placeholder - in a real app, you would have a more sophisticated recommendation engine
    const baseRecommendations = [
        {
            name: 'AI Transcription Service',
            description: userData.languagePreference === 'ja' ?
                '会議の自動文字起こしと要約' :
                'Automatic meeting transcription and summarization',
            url: 'https://example.com/transcription'
        },
        {
            name: 'Data Entry Automation',
            description: userData.languagePreference === 'ja' ?
                'フォームからのデータ入力の自動化' :
                'Automate data entry from forms',
            url: 'https://example.com/data-entry'
        },
        {
            name: 'Document Analysis',
            description: userData.languagePreference === 'ja' ?
                '契約書や報告書の自動分析' :
                'Automatically analyze contracts and reports',
            url: 'https://example.com/document-analysis'
        }
    ];

    return baseRecommendations;
}

// Send recommendation email
export async function sendRecommendationEmail(userData) {
    const { email, companyName, industry, painPoints, techStack, languagePreference } = userData;

    // Generate recommendations based on user data
    const recommendations = generateRecommendations(userData);

    // Define email content based on language preference
    const subject = languagePreference === 'ja'
        ? `${companyName}様向けAIソリューション推奨リスト`
        : `AI Solution Recommendations for ${companyName}`;

    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: email,
            subject: subject,
            html: buildEmailTemplate(userData, recommendations),
            tags: [
                {
                    name: 'industry',
                    value: industry
                },
                {
                    name: 'language',
                    value: languagePreference
                }
            ]
        });

        return { success: true, data };
    } catch (error) {
        console.error('Email sending failed:', error);
        return { success: false, error };
    }
}

// Build email template based on user data and language preference
function buildEmailTemplate(userData, recommendations) {
    const { companyName, languagePreference } = userData;

    // Japanese email template
    if (languagePreference === 'ja') {
        return `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #1a56db;">${companyName}様、ありがとうございます</h1>
        <p>お問い合わせいただき、誠にありがとうございます。ご希望に基づいたAIソリューションの推奨リストをお送りします。</p>
        
        <h2 style="color: #1e429f; margin-top: 30px;">推奨AIソリューション:</h2>
        <ul style="padding-left: 20px; line-height: 1.6;">
          ${recommendations.map(rec => `
            <li>
              <strong>${rec.name}</strong>: ${rec.description}
              <br>
              <a href="${rec.url}" style="color: #2563eb; text-decoration: none;">詳細を見る</a>
            </li>
          `).join('')}
        </ul>
        
        <div style="margin: 40px 0; padding: 20px; background-color: #f0f9ff; border-radius: 8px;">
          <h3 style="color: #1e429f; margin-top: 0;">無料コンサルティングセッション</h3>
          <p>より詳細なご提案をご希望の場合は、無料コンサルティングセッションをご予約ください。</p>
          <a href="https://calendly.com/your-consulting/free-session" style="display: inline-block; background-color: #1a56db; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin-top: 10px;">セッションを予約</a>
        </div>
      </div>
    `;
    }

    // English email template
    return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #1a56db;">Thank you, ${companyName}</h1>
      <p>Thank you for your inquiry. Here is your personalized list of recommended AI solutions based on your needs.</p>
      
      <h2 style="color: #1e429f; margin-top: 30px;">Recommended AI Solutions:</h2>
      <ul style="padding-left: 20px; line-height: 1.6;">
        ${recommendations.map(rec => `
          <li>
            <strong>${rec.name}</strong>: ${rec.description}
            <br>
            <a href="${rec.url}" style="color: #2563eb; text-decoration: none;">Learn more</a>
          </li>
        `).join('')}
      </ul>
      
      <div style="margin: 40px 0; padding: 20px; background-color: #f0f9ff; border-radius: 8px;">
        <h3 style="color: #1e429f; margin-top: 0;">Free Consultation Session</h3>
        <p>For a more detailed proposal, book a free consultation session with our experts.</p>
        <a href="https://calendly.com/your-consulting/free-session" style="display: inline-block; background-color: #1a56db; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin-top: 10px;">Book a Session</a>
      </div>
    </div>
  `;
} 