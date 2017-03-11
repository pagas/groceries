"use strict";
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "ptest@test.com";
        this.user.password = "test";
    }
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function () { return _this.router.navigate(["/list"]); }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [
            user_service_1.UserService
        ],
        templateUrl: 'pages/login/login.html',
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMEM7QUFDMUMsK0NBQThDO0FBQzlDLCtEQUE2RDtBQUM3RCwwQ0FBeUM7QUFVekMsSUFBYSxjQUFjO0lBSXZCLHdCQUFvQixNQUFjLEVBQVUsV0FBd0I7UUFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRnBFLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBR2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQztJQUNMLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQzVCLFNBQVMsQ0FDVixjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUEvQixDQUErQixFQUNyQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxFQUF0RCxDQUFzRCxDQUNoRSxDQUFDO0lBQ1YsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDL0IsU0FBUyxDQUNWO1lBQ0ksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7WUFDaEQsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFDRCxjQUFNLE9BQUEsS0FBSyxDQUFDLHNEQUFzRCxDQUFDLEVBQTdELENBQTZELENBQ2xFLENBQUM7SUFDVixDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUF4Q0QsSUF3Q0M7QUF4Q1ksY0FBYztJQVIxQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFO1lBQ1AsMEJBQVc7U0FDZDtRQUNELFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7S0FDdkUsQ0FBQztxQ0FLOEIsZUFBTSxFQUF1QiwwQkFBVztHQUozRCxjQUFjLENBd0MxQjtBQXhDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1hcHBcIixcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFVzZXJTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdwYWdlcy9sb2dpbi9sb2dpbi5odG1sJyxcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gICAgdXNlcjogVXNlcjtcclxuICAgIGlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XHJcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJwdGVzdEB0ZXN0LmNvbVwiO1xyXG4gICAgICAgIHRoaXMudXNlci5wYXNzd29yZCA9IFwidGVzdFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaWduVXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAoKSA9PiB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSksXHJcbiAgICAgICAgICAgIChlcnJvcikgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduVXAoKSB7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCIpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRGlzcGxheSgpIHtcclxuICAgICAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgICB9XHJcbn0iXX0=