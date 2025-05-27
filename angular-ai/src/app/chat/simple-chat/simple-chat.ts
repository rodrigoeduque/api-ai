import { Component, signal } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { NgClass } from "@angular/common";

@Component({
  selector: "app-simple-chat",
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    NgClass
  ],
  templateUrl: "./simple-chat.html",
  styleUrl: "./simple-chat.scss",
})
export class SimpleChat {
  userInput = "";

  messages = signal([{ text: "Olá, como posso ajuda-lo hoje?", isBot: true }]);

  sendMessage() {
    this.trimUserMessage();
    if (this.userInput !== '') {
      this.updateMessages(this.userInput)
      this.userInput = "";
      this.simulateResponseMock();
    }
  }

  private updateMessages(text: string, isBot= false) {
    this.messages.update(messages => [
      ...messages, { text: text, isBot }
    ]);
  }

  private trimUserMessage() {
    this.userInput = this.userInput.trim();
  }

  private simulateResponseMock() {
    setTimeout(() => {
      const response = "Esta é uma resposta simulada.";
      this.updateMessages(response, true);
   }, 2000);
  }
}
