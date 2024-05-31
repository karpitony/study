using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowSignIn
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void SignInButton_Click(object sender, EventArgs e)
        {
            string userId = id.Text;
            string userPasswaord = password.Text;

            if (userId.Equals("MyID") && userPasswaord.Equals("MyPassword")) {
                MessageBox.Show("로그인에 성공했습니다.", "로그인");
            }
            else
            {
                MessageBox.Show("로그인에 실패했습니다.", "로그인");
            }
        }

        private void password_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
