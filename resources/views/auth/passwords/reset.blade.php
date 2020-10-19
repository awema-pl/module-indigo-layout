<form-builder disabled-dialog="" url="{{ route('password.update') }}" send-text="{{ __('indigo-layout::auth.passwords.reset.change_password') }}">
	<fb-input name="email" label="{{ __('indigo-layout::auth.general.email') }}" autofocus required autocomplete="email" :debounce="0"></fb-input>
	<fb-input type="hidden" name="token" value="{{ $token }}"></fb-input>
    <fb-input name="password" label="{{ _p('indigo-layout::auth.general.new_password','New password') }}" type="password" required autocomplete="new-password" :debounce="0"></fb-input>
    <fb-input name="password_confirmation" label="{{ __('indigo-layout::auth.general.password_confirmation') }}" type="password" required autocomplete="new-password" :debounce="0"></fb-input>
</form-builder>
