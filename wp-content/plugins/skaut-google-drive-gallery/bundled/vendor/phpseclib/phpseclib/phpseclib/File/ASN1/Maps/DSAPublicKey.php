<?php

/**
 * DSAPublicKey
 *
 * PHP version 5
 *
 * @category  File
 * @package   ASN1
 * @author    Jim Wigginton <terrafrost@php.net>
 * @copyright 2016 Jim Wigginton
 * @license   http://www.opensource.org/licenses/mit-license.html  MIT License
 * @link      http://phpseclib.sourceforge.net
 */
namespace Sgdg\Vendor\phpseclib3\File\ASN1\Maps;

use Sgdg\Vendor\phpseclib3\File\ASN1;
/**
 * DSAPublicKey
 *
 * @package ASN1
 * @author  Jim Wigginton <terrafrost@php.net>
 * @access  public
 */
abstract class DSAPublicKey
{
    const MAP = ['type' => ASN1::TYPE_INTEGER];
}
