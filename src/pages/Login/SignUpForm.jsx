import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import SelectBox from '../../components/select/SelectBox';
import styles from './login.module.css';

const SignUpForm = () => {
  const repositories = [
    { id: 1, name: 'Repository 1' },
    { id: 2, name: 'Repository 2' },
    { id: 3, name: 'Repository 3' },
  ];

  return (
    <form className={styles.loginForm}>
      <Input labelTxt="Email" placeholder="Email을 입력해주세요" />
      <Input labelTxt="Password" placeholder="Password을 입력해주세요" />
      <Input labelTxt="Team Name" placeholder="Team Name을 입력해주세요" />
      <div className={styles.gitHubInput}>
        <Input
          labelTxt="GitHub Token"
          placeholder="GitHub Token을 입력해주세요"
          withButton
          buttonText="인증하기"
        />
        <SelectBox
          options={repositories}
          defaultText="추가할 레포지토리를 선택해 주세요"
        />
      </div>
      <Button text="Sign up" />
    </form>
  );
};

export default SignUpForm;
