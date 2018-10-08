<?php

  get_header();

  if (have_posts()) :
      while (have_posts()) : the_post(); ?>

  <article>

    <!--content php-->
    <?php the_content(); ?>

  </article>

  <?php endwhile;
    else :
        echo
            '<div></div>';
    endif;

  get_footer();

?>
