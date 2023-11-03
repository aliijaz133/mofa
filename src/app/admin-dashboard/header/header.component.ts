import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DatePipe],
})
export class HeaderComponent {
  userName: any;
  userImg: any;
  data: any[] = [];
  hidden: boolean = false;
  userIdentity: any;
  notifications_list: any[]
  today = new Date();
  pipe = new DatePipe('en-US');
  alert_count: any

  constructor(public route: ActivatedRoute,
    private router: Router,
  ) {
    this.userName = '';
    this.notifications_list = []
    this.alert_count = ""
  }
  ngOnInit(): void {
    // this.getUserProfile();
    // this.getUserInfo();
    // this.dss.onSignal().subscribe((value) => {
    //   if (value && value?.type === 'update' && value.item) {
    //     this.getUserInfo();
    //   }
    // });

    // this.getNotification()
  }


  toggleBadgeVisibility() {
    this.hidden = true;
  }

  /* logout the cureent logged In user */

  logout() {
    // let userEmail = JSON.parse(localStorage.getItem('userData') || '{}')
    // let params = { 'email': userEmail.email }
    // const slug = `${environment.baseUrl}/users/authentication/logout`;
    // this.apiService.post(slug, params).subscribe((data: any) => {
    //   this.AuthService.unsetUser();
    //   localStorage.removeItem("userData")
    //   localStorage.removeItem("token")
    //   localStorage.removeItem("setvalue")
    //   this.socketService.socket.disconnect()
    //   if (localStorage.getItem('userData') == '') {
    //     localStorage.removeItem('userData')
    //   }
    //   let rememberMe = localStorage.getItem("remember");
    //   if (rememberMe != 'true') {
    //     localStorage.removeItem('useremail')
    //     localStorage.removeItem('userpassword')
    //   }

    //Firebase signout
    // this.SignOut();

    // if (val) {
    this.router.navigateByUrl('/login');
    // } else {
    // localStorage.setItem('setvalue', "false");
    // this.router.navigateByUrl('/login');
    // }
    //   }
  }

  getUserInfo() {
    // const us: any = localStorage.getItem('userData');
    // const user = JSON.parse(us);
    // this.userName = user.first_name
    // this.userImg = user.image
    // this.userIdentity = user
  }


  setting() {
    // this.router.navigateByUrl('pickup/settings');
  }
  userProfile() {
    // this.router.navigateByUrl('pickup/user-management/user-profile')
  }
  // firebase signout 
  SignOut() {
    // this.fbAuth.signOut().then((res) => {
    //   //   // console.log(res);
    // });
  }

  getNotification() {
    // const slug = `${environment.pickUpBaseUrlfeature}/notification`;
    // this.apiService.get(slug).subscribe((resp: any) => {
    //   this.notifications_list = []
    //   let dt = resp.data;
    //   dt.forEach((ele: any) => {
    //     let notificationArray: any = {}
    //     notificationArray['title'] = ele.title;
    //     notificationArray['status'] = ele.status;
    //     notificationArray['id'] = ele.id;
    //     notificationArray['date'] = (this.pipe.transform(ele.createdAt, 'dd-MM-yyyy') === this.pipe.transform(this.today, 'dd-MM-yyyy')) ? "today" : (this.pipe.transform(ele.createdAt, 'dd-MM-yyyy'));
    //     notificationArray['time'] = (this.pipe.transform(ele.createdAt, 'hh:mm a'))
    //     this.notifications_list.push(notificationArray)
    //   });
    //   let unRead: any
    //   if (this.notifications_list && this.notifications_list.length > 0)
    //     unRead = this.notifications_list.filter((ele: any) => {
    //       return ele.status === "UNREAD"

    //     });
    //   if (unRead) {
    //     this.alert_count = unRead.length;
    //     if (this.alert_count > 999) {
    //       this.alert_count = '999+';
    //     }
    //   }

    // });
  }


  onMenuClosed() {
    console.log('Menu closed');
  }

  markRead(id: any) {
    // console.log('markRead", id: ' + id);

    // const slug = `${environment.pickUpBaseUrlfeature}/notification/${id}/read`;
    // this.apiService.patch(slug, "").subscribe((resp: any) => {
    //   // console.log("Updated", resp);
    //   this.getNotification()
    //   this.hidden = false;
    // });
  }
}