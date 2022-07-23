import { Injectable } from '@nestjs/common'
import Mail from 'nodemailer/lib/mailer'
import * as nodemailer from 'nodemailer'
import { EmailType } from 'utils/type'

interface Emailable<T extends string> {
  to: T
  subject: T
  html: T
}

@Injectable()
export class EmailService {
  private transport: Mail

  constructor() {
    this.transport = nodemailer.createTransport({
      service: EmailType.GMAIL,
      auth: {
        user: 'zkfmapf999',
        pass: null,
      },
    })
  }

  async sendMemberJoinVerification(emailAddress: string, token: string): Promise<any> {
    const baseUrl = 'http://localhost:3000'
    const url = `${baseUrl}/users/email-verify?signupVerifyToken=${token}`

    const mailOptions: Emailable<string> = {
      to: emailAddress,
      subject: '가입 인증 메일',
      html: `
        가입확인 버튼를 누르시면 가입 인증이 완료됩니다.<br/>
        <form action="${url}" method="POST">
          <button>가입확인</button>
        </form>
        `,
    }

    return await this.transport.sendMail(mailOptions)
  }
}
