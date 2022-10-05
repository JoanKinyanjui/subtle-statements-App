import React from 'react';
import './SinglePost.css';

function SinglePost() {
  return (<>
 
    <div className='SinglePostWrapper'>
        <img className='SinglePostImg' src='/images/face5.jpg'/>
        <div className='SinglePostnav'>
            <div className='divTitle'>
            <span className='Title'>Being in a Group of Friends</span>
            <div className='CorrectionArea'>
                <span className='edit'>Edit</span>
                <span className='delete'>Delete</span>
            </div>
            </div>
            <div className='writerInfo'>
                <span className='author'>Author: Joan Kinyanjui</span>
                <span className='DateWritten'>4hrs ago</span>
            </div>
        </div>

        <div className='Article'>
        One thing no one told me is that being in a group of friends requires the same commitment as being in a marriage setting.Be it two, three, or even more 
these people turn out to be your life partners. The best feeling in life is waking up and knowing that you have your people no matter what. People who know you more than yourself,
          people who can tell when you need saving without asking, people who know what dress or food you'd go with, and many other things. They know when you lying
           , when you're sad and when you’re happy. For me, this is the purest form of love.<br />
           A while ago I belonged to a group of friends, we were four. We all loved and trusted each other with different intensities did most, if not all things together.
           I'd love to vividly describe all of them leaving their names out.
           A--was brave, she hadn't figured out life but she was open to adventuring things. She moved from being one Holier than Thou 
           to bring our events organizer, all things alcohol, clubbing, and meeting guys. She always had our weekend plan and all she did was inform us of our budget. Note 
           better she could never take NO for an answer. She was also the most toxic person alive.<br />
            B-- was very chill, never too outgoing but always cool, she was my best friend.She was the one you'd turn to if you needed wise solutions and nothing toxic.
           C—was ver wild despite having her parents always monitoring her whereabouts she would turn up. She was the one person you'd turn to for financial assistance,
           not that she was rich but she had her means.
           D-- was outgoing too, the other extremely courageous person she’d mostly speak on our behalf. She had her ways with lies. She never thought about them, they just came.
              She was creative too and thus her opinion on what to wear, what hair to make, and what color of nails to put on was appreciated.
              <br />
              <br/>

              Now that you know them, we were a match. We had an online group where one man's problem became our problem. If you got into a relationship we got in it too and if you left we 
              we left too. Whoever one loved, or hated we did the same to them.More like if you were a friend to one of us, you were a friend to all of us and vice versa. We were inseparable without
              even trying. Time went by and we all just grew apart. We let our differences come between us and everyone’s ego got the best of us.
              At the time, we can't fix things, all we have are memories and plans left unattended. We cannot go back to who we were nor can we bring back the trust we lost with each other, but we will forever remember that we were each other’s cheerleaders and hope that all the dreams we dreamt together, we will achieve. 

        </div>

    </div>
    </>
  )
}

export default SinglePost;