import { Inject, Injectable } from '@nestjs/common'
import { User } from 'base/model'
import Mail from 'nodemailer/lib/mailer'
import * as nodemailer from 'nodemailer'
import { LoggerService } from 'src/common/logger.service'
import { VerifyType } from 'utils/type'

interface EmailOption {
  to: string
  subject: string
  html: string
}

@Injectable()
export class VerifyFactoryService {
  private transporter: Mail
  private readonly context = 'VerifyFactoryService'
  @Inject(LoggerService) logger: LoggerService

  async sendVerify(verifyParam: VerifyType, params: User) {
    this.logger.info(`${this.context} sendVerify ${verifyParam}`)
    switch (verifyParam) {
      case VerifyType.GMAIL:
        await this.sendGmail(params)
    }
  }

  private initMailOption(): void {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'GOOGLE_ID',
        pass: 'GOOGLE_PASS',
      },
    })
  }

  private initSendOption(email: string, signUpVerifyToken: string): EmailOption {
    const baseUrl = 'http://localhot:3000' // TODO: config
    const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signUpVerifyToken}`
    return {
      to: email,
      subject: '가입 인증 메일',
      html: `
        <br> 가입확인 버튼을 누르시면 확인이 완료됩니다 </br>
        <form action="${url}" method="POST">
          <button>가입할게요</button>
        </form>
      `,
    }
  }

  private async sendGmail(userParams: User): Promise<void> {
    this.logger.info(`${this.context} sendGmail ${userParams.userEmail}`)
    this.initMailOption()
    const emailSendOption = this.initSendOption(userParams.userEmail, userParams.token)
    await this.transporter.sendMail(emailSendOption)
  }
}
